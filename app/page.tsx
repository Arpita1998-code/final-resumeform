import Link from "next/link";

function page() {
  return (
    <div className="relative bg-blue">
      <Link className="absolute font-bold text-[60px] text-blue-600 top-[280px] left-[500px]" href="/form">GO TO FORM</Link>
    </div>
  )
}

export default page;