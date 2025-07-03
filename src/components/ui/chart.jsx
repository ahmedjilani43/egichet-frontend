export function ChartContainer({ children, }) {
    return <div>{children}</div>;
}
export function ChartTooltip({ content }) {
    return <>{content}</>;
}
export function ChartTooltipContent() {
    return <div className="bg-white p-2 border rounded shadow">Tooltip</div>;
}