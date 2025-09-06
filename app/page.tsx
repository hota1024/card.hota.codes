import { Button } from "@/components/ui/button";
import {
  SiFacebook,
  SiGithub,
  SiX,
  SiZenn,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    event?: string;
    date: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  // const event = params.event;
  // const date = params.date;

  return (
    <div className="min-h-dvh grid place-items-center">
      <div className="max-w-lg w-full p-4">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-slate-600 h-[128px] relative mb-[80px]">
            <div className="absolute top-[48px] left-1/2 -translate-x-1/2 border-8 border-slate-600 rounded-full">
              <img
                className="rounded-full"
                src="https://pbs.twimg.com/profile_images/1487344009370497024/RnJpNrGW_400x400.jpg"
                alt="Hotaka Okumoto"
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="p-4 grid gap-8">
            <div className="grid gap-2">
              <div>
                <h1 className="font-mono text-4xl text-center">ほた</h1>
                <h2 className="font-mono text-2xl text-center">
                  Hotaka Okumoto
                </h2>
              </div>
              <div>
                <div className="text-center text-muted-foreground text-sm">
                  神奈川県藤沢市↔静岡県静岡市
                </div>
              </div>
              <div>
                <p className="text-center">
                  Next.js と Rust が好きな休学中の大学生。
                  <br />
                  たまに<span>プログラミング言語とか</span><span>コンパイラを作ってる。</span>
                  <br />
                  TRPG、ゲーム、マンガ、アニメ、お散歩も好き。
                </p>
              </div>
            </div>
            <div className="grid gap-2">
              <Button variant="outline" size="lg" asChild>
                <Link href="https://x.com/hota1024">
                  <SiX />
                  @hota1024
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com/hota1024">
                  <SiGithub />
                  @hota1024
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://zenn.dev/hota1024">
                  <SiZenn />
                  @hota1024
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://www.facebook.com/hota1024">
                  <SiFacebook />
                  @hota1024
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
