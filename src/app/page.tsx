import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Lima</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent className=''>
          <Image
            src="wi-day-cloudy.svg"  // Ruta al archivo SVG dentro de la carpeta public
            alt="Weather Icon"
            className="fill-current text-black dark:text-white"
            width={30}
            height={30}
          />
        </CardContent>
        <CardFooter className="flex justify-between">

        </CardFooter>
      </Card>
    </div>
  );
}
