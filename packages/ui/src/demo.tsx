import { Button } from "./button";

interface DemoProps {
  appName: string;
}

export const Demo = ({ appName }: DemoProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 max-w-sm">
      <h2 className="text-xl font-semibold mb-2">Shared UI Demo</h2>
      <p className="text-gray-500 mb-4">
        This component is rendered from <code className="text-sm bg-gray-100 px-1 py-0.5 rounded">@repo/ui</code> inside <strong>{appName}</strong>.
      </p>
      <Button appName={appName}>Click me</Button>
    </div>
  );
};
