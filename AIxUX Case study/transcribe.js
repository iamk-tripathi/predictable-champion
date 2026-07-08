const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node transcribe.js <audio-file> [output-file]",
      "",
      "Examples:",
      "  node transcribe.js \"/Users/me/Downloads/audio.m4a\"",
      "  node transcribe.js ./meeting.m4a ./meeting.txt",
    ].join("\n"),
  );
}

async function main() {
  const [, , audioFileArg, outputFileArg] = process.argv;

  if (!audioFileArg) {
    printUsage();
    process.exit(1);
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error("Missing OPENAI_API_KEY in the environment.");
    process.exit(1);
  }

  const audioFile = path.resolve(audioFileArg);

  if (!fs.existsSync(audioFile)) {
    console.error(`Audio file not found: ${audioFile}`);
    process.exit(1);
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    maxRetries: 0,
  });

  const transcript = await client.audio.transcriptions.create({
    file: fs.createReadStream(audioFile),
    model: "whisper-1",
    response_format: "text",
  });

  if (outputFileArg) {
    const outputFile = path.resolve(outputFileArg);
    fs.writeFileSync(outputFile, transcript, "utf8");
    console.log(`Transcript saved to ${outputFile}`);
    return;
  }

  console.log(transcript);
}

main().catch((error) => {
  if (error?.status) {
    console.error(`OpenAI request failed (${error.status}): ${error.message}`);
  } else {
    console.error(error?.message || error);
  }
  process.exit(1);
});
