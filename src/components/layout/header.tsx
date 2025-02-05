// import { SiteDocs } from "@/config/docs";
import Link from "next/link";
// import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper max-w-screen-lg mx-auto">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
              <span className="hidden font-bold lg:inline-block">KooYS</span>
            </Link>
            {/* <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {SiteDocs.map((doc) => (
                <Link key={doc.href} href={doc.href}>
                  {doc.title}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  );
}
