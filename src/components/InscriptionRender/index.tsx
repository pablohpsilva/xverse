import { PropsWithTestId } from "@/types/common";
import withTestId from "../WithTestId";

export type InscriptionRenderProps = PropsWithTestId<{
  contentType: string;
  src: string;
}>;

const InscriptionRender = ({
  contentType,
  src,
  testId,
}: InscriptionRenderProps) => {
  if (contentType.startsWith("image/")) {
    return (
      <img
        src={src}
        alt="Inscription"
        width={375}
        height={375}
        className="rounded-lg max-w-[375px] w-full"
        data-testid={testId}
      />
    );
  }

  if (contentType.startsWith("video/")) {
    return (
      <video
        width={375}
        height={375}
        controls
        className="rounded-lg max-w-[375px] w-full"
        data-testid={testId}
      >
        <source src={src} type={contentType} />
      </video>
    );
  }

  if (contentType.startsWith("audio/")) {
    return (
      <audio
        controls
        className="max-w-[375px] h-[375px] w-full rounded-lg"
        data-testid={testId}
      >
        <source src={src} type={contentType} />
      </audio>
    );
  }

  if (contentType.startsWith("application/")) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center max-w-[375px] h-[375px] w-full bg-inputBackground rounded-lg hover:bg-background"
        data-testid={testId}
      >
        {contentType.split("/")[1]}
      </a>
    );
  }

  if (contentType.startsWith("text/html")) {
    return (
      <iframe
        src={src}
        width={375}
        height={375}
        className="rounded-lg max-w-[375px] w-full"
        sandbox="allow-scripts"
        title="HTML inscription"
        data-testid={testId}
      />
    );
  }

  return null;
};

export default withTestId(InscriptionRender);
