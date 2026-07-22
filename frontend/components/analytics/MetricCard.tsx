type Props = {
  title: string;
  value: number | string;
  icon: string;
  color: string;
};

export default function MetricCard({
  title,
  value,
  icon,
  color,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}
        >
          <span className="text-3xl">
            {icon}
          </span>
        </div>

      </div>

    </div>
  );
}