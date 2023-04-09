import Image from "next/image";

const LargeCard = () => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src="https://links.papareact.com/4cj"
          className="rounded-2xl"
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">The Greatest Outdoors</h3>
        <p>Wishlist Curated by Airbnb</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          Get Inspired
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
