import { NextResponse } from "next/server";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(req) {
  const { prompt } = await req.json();

  if (!process.env.NOVITA_API_KEY) {
    return NextResponse.json(
      { error: "Novita API key not configured" },
      { status: 500 }
    );
  }
  //   console.log(process.env.NOVITA_API_KEY);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NOVITA_API_KEY}`,
    },
    body: JSON.stringify({
      model_name: "darkSushiMixMix_225D_64380.safetensors",
      height: 512,
      width: 512,
      steps: 30,
      prompts: [{ frames: 24, prompt }],
      negative_prompt:
        "nsfw, ng_deepnegative_v1_75t, badhandv4, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), watermark",
      guidance_scale: 7,
      seed: Math.floor(Math.random() * 100000),
      loras: [],
      embeddings: [],
      closed_loop: false,
      clip_skip: 1,
    }),
  };

  try {
    const res = await fetch(
      "https://api.novita.ai/v3/async/txt2video",
      options
    );
    const initialData = await res.json();

    if (!res.ok || !initialData.task_id) {
      console.error("Error starting video generation task:", initialData);
      return NextResponse.json(
        {
          error: "Failed to start video generation task.",
          details: initialData,
        },
        { status: res.status }
      );
    }
    const { task_id } = initialData;

    const maxAttempts = 20;
    const pollInterval = 3000;

    for (let i = 0; i < maxAttempts; i++) {
      await sleep(pollInterval);

      const taskStatusRes = await fetch(
        `https://api.novita.ai/v3/async/task-result?task_id=${task_id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NOVITA_API_KEY}`,
          },
        }
      );
      const taskResult = await taskStatusRes.json();

      if (taskResult.task.status === "TASK_STATUS_SUCCEED") {
        return NextResponse.json({ video_url: taskResult.videos[0].video_url });
      }

      if (taskResult.task.status === "TASK_STATUS_FAILED") {
        console.error("Video generation failed:", taskResult.task.reason);
        return NextResponse.json(
          {
            error: "Video generation failed",
            details: taskResult.task.reason,
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "Video generation timed out." },
      { status: 504 }
    );
  } catch (error) {
    console.error("Error generating video:", error);
    return NextResponse.json(
      { error: "Failed to generate video" },
      { status: 500 }
    );
  }
}
