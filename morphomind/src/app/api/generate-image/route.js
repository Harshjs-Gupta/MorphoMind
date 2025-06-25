import { OpenAI } from "openai";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const openai = new OpenAI({
  baseURL: "https://api.studio.nebius.com/v1/",
  apiKey: process.env.NEBIUS_API_KEY,
});
export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await openai.images.generate({
      model: "stability-ai/sdxl",
      response_format: "url",
      response_extension: "png",
      width: 720,
      height: 720,
      num_inference_steps: 30,
      negative_prompt: "",
      seed: -1,
      prompt: prompt,
    });

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}
