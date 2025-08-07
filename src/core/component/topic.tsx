type TopProps = {
  title: string;
};
export default function Topic({title}: TopProps) {
  return(
    <div className="max-w-6xl mx-20 lg:mx-auto my-4">
      <div className="text-[35px] text-red-900 text-center">
          {title}
      </div>
    </div>
  )
}