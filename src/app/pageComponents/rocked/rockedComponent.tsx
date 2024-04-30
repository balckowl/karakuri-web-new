import Image from "next/image";

const RockedComponent = () => {

  return (
    <div>
      <Image src="/images/other/rocked.webp" alt="rocked" width="2000" height="2000" className="absolute left-0 top-0 -z-10 h-screen w-full object-cover" />
    </div>
  )
}

export default RockedComponent