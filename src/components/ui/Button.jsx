import { LuMessageCircle } from "react-icons/lu";

export default function Button({
  title = "become our Franchisee",
  Icon = LuMessageCircle,
  className = "",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
      className={`bg-gradient-lr flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3 ${className}`}
    >
      <Icon className="size-6" />
      {title}
    </button>
  );
}
