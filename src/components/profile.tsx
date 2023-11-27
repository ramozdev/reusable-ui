import Card from "@/ui/html/card";
import Image from "next/image";
import Link from "next/link";

type Social = {
  name: string;
  url: string;
}[];

const socials: Social = [
  {
    name: "Github",
    url: "github.com/",
  },
  {
    name: "Twitter",
    url: "twitter.com/",
  },
  {
    name: "Instagram",
    url: "instagram.com/",
  },
  {
    name: "LinkedIn",
    url: "linkedin.com/in/",
  },
];

export default function Profile() {
  return (
    <div className="space-y-2">
      <Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3B1JkWOEbJr43EphpypbSmVfObvImArqeYs_EjBaagQ&s"
        }
        width={200}
        height={200}
        className="rounded"
        alt="Picture of the author"
      />
      <p className="text-2xl">Albert Einstein</p>
      <p>Collecting</p>
      {socials.map((social) => (
        <Link href={social.url} key={social.name}>
          <Card key={social.name} className="my-2 py-2">
            {social.name}
          </Card>
        </Link>
      ))}
    </div>
  );
}
