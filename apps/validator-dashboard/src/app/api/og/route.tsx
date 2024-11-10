import { ImageResponse } from "next/og"
import { formatEther } from "viem/utils"

import { getMevCommitMetrics } from "@/lib/data"

import { loadGoogleFont } from "./utils"

export const runtime = "edge"

// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  const { totalStaked, totalOptedIn, totalRestaked } =
    await getMevCommitMetrics()

  const fontData = await loadGoogleFont("Fira+Code:wght@300..700")

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "black",
          fontFamily: "FiraCode",
          color: "white",
          justifyContent: "center",
        }}
      >
        <div tw="flex flex-col px-18 ">
          <div tw="flex mb-10">
            <svg
              width="295"
              height="51"
              viewBox="0 0 295 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3627 5.07858C32.2834 2.07825 28.0409 0.578094 22.6297 0.578094H0.669434V50.2624H12.5076V33.8238H22.6297C28.0409 33.8238 32.2834 32.3395 35.3627 29.3707C38.4367 26.3967 39.979 22.3542 39.979 17.2431C39.979 12.132 38.4367 8.07364 35.3627 5.07858ZM21.3664 23.5227H12.5076V10.8845H21.3664C25.6827 10.8845 27.8461 13.0005 27.8461 17.2378C27.8461 21.4751 25.6827 23.5227 21.3664 23.5227Z"
                fill="white"
              />
              <path
                d="M81.8995 31.4867C85.0683 30.4182 87.4527 28.5917 89.0424 26.0072C90.632 23.4279 91.4268 20.4066 91.4268 16.9483C91.4268 11.8846 89.8898 7.88941 86.8105 4.96804C83.7365 2.04667 79.494 0.578094 74.0828 0.578094H52.1226V50.2624H63.9607V33.3869H69.5402L79.4413 50.2624H93.2165L81.8995 31.4867ZM72.6669 23.0858H63.9554V10.8845H72.8143C77.1305 10.8845 79.2834 12.9005 79.2834 16.9483C79.2834 20.9961 77.0779 23.0858 72.6616 23.0858H72.6669Z"
                fill="white"
              />
              <path
                d="M104.676 0.578094V50.2624H116.514V0.578094H104.676Z"
                fill="white"
              />
              <path
                d="M167.061 0.578094L156.939 30.9709H156.791L145.848 0.578094H130.136V50.2624H141.679V21.3277H141.826L151.88 50.2624H160.444L170.861 21.3277H171.009V50.2624H182.852V0.578094H167.066H167.061Z"
                fill="white"
              />
              <path
                d="M230.422 0.42041H195.523V11.3585H230.422V0.42041Z"
                fill="white"
              />
              <path
                d="M230.422 19.9546H195.523V30.8927H230.422V19.9546Z"
                fill="white"
              />
              <path
                d="M230.422 39.4824H195.523V50.4204H230.422V39.4824Z"
                fill="white"
              />
              <path
                d="M242.917 0.578094L262.061 50.2624H274.299L256.46 0.578094H242.917Z"
                fill="white"
              />
              <path
                d="M281.068 0.578094L270.393 30.2392H282.894L294.222 0.578094H281.068Z"
                fill="#E97D25"
              />
            </svg>
          </div>
          <div tw="flex flex-col h-min">
            <div
              style={{ fontSize: "56px" }}
              tw="text-4xl font-semibold text-primary opacity-90"
            >
              mev-commit
            </div>
            <h1
              style={{ fontSize: "64px" }}
              tw="text-6xl font-bold leading-none"
            >
              Validator Registry
            </h1>
          </div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(233,125,37,1) 15%, rgba(33,3,54,.3) 38%, rgba(210,82,82,1) 85%)",
            }}
            tw="w-full h-1 bg-slate-600 "
          />
          <div tw="flex flex-col ">
            <div tw="rounded-lg flex items-center">
              <div tw="flex flex-row items-center justify-between py-0">
                <h3
                  style={{ fontWeight: "700" }}
                  tw="text-5xl font-bold tracking-tight mr-4 leading-none"
                >
                  Total Staked:
                </h3>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    width="18"
                    height="11"
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg> */}
              </div>

              <div tw="flex items-end text-5xl font-bold">
                {formatEther(totalStaked + totalRestaked)}
                <span
                  style={{ marginLeft: "4px" }}
                  tw="text-3xl font-bold tracking-tight text-muted-foreground leading-tight"
                >
                  ETH
                </span>
              </div>
            </div>
            <div tw="rounded-lg flex items-center">
              <div tw="flex flex-row items-center justify-between py-0">
                <h3 tw="text-5xl font-bold tracking-tight leading-none mr-4">
                  Validators Opted-In:
                </h3>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // @ts-ignore
                  tw="lucide lucide-users h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg> */}
              </div>
              <div tw="flex items-end gap-2 text-5xl font-bold">
                {totalOptedIn.toString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "FiraCode",
          data: fontData["regular"] || new ArrayBuffer(0),
          style: "normal",
          weight: 400,
        },
        {
          name: "FiraCode",
          data: fontData["medium"] || new ArrayBuffer(0),
          style: "normal",
          weight: 500,
        },
        {
          name: "FiraCode",
          data: fontData["semibold"] || new ArrayBuffer(0),
          style: "normal",
          weight: 600,
        },
        {
          name: "FiraCode",
          data: fontData["bold"] || new ArrayBuffer(0),
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
