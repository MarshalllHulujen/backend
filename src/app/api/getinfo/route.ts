import { NextRequest, NextResponse } from "next/server";
import ytdl from "ytdl-core";

type Details = {
  title: string;
  description: string;
  time: string;
  image: string;
};

export const POST = async (request: NextRequest) => {
  try {
    const { url } = await request.json();
    const value: string = url as string;

    if (!value || !ytdl.validateURL(value)) {
      return new Response("Invalid or missing YouTube URL", {
        status: 400,
      });
    }

    const info: any = await ytdl.getInfo(value);

    const title = info.videoDetails.title;
    const description = info.videoDetails.description;
    const time = info.videoDetails.lengthSeconds;
    const thumbnails = info.videoDetails.thumbnails;
    const thumbnail = thumbnails.find((el: any) => {
      return el.width === 1920 && el.height === 1080;
    });
    const image = thumbnail.url;

    const res: Details = {
      title,
      description,
      time,
      image,
    };

    return new NextResponse(JSON.stringify(res), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Error", {
      status: 500,
    });
  }
};
