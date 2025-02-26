"use client"
import EmailForm from "@/app/Refer";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export default function Cards() {
  return (
    <div className="" onClick={() => console.log('clicked')}>
    
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Title</p>
          <p className="text-small text-default-500">pushase.com</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>A Course of C and C++ for dsa</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {/* <Link isExternal showAnchorIcon href="https://github.com/">
          Refer & Earn
        </Link> */}
        <EmailForm />
      </CardFooter>
    </Card>
    </div>
  );
}
