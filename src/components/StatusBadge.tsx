import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: "In Development" | "Approved" | "Discontinued";
  className?: string;
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold opacity-70";

  const statusConfig = {
    "In Development": "bg-orange-100 text-orange-700 border border-orange-200",
    Approved: "bg-green-100 text-green-700 border border-green-200",
    Discontinued: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      role="status"
      className={cn(baseClasses, statusConfig[status], className)}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
