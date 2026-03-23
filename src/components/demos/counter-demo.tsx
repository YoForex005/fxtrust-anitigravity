"use client";

import { useCounter } from "@/components/hooks/use-counter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Minus,
  RotateCcw,
  X,
  DivideSquare,
  Calculator,
} from "lucide-react";

function UseCounterDemo() {
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  const multiplyBy2 = () => setCount((x) => x * 2);
  const divideBy2 = () => setCount((x) => Math.floor(x / 2));

  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Counter Controls</h3>
            <p className="text-sm text-muted-foreground">
              Experiment with different counter operations
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-7xl font-bold tabular-nums">{count}</div>
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-32 text-center"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={increment} className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Increment
            </Button>
            <Button variant="outline" onClick={decrement} className="flex items-center gap-2">
              <Minus className="h-4 w-4" /> Decrement
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="secondary" onClick={multiplyBy2} className="flex items-center gap-2">
              <X className="h-4 w-4" /> x2
            </Button>
            <Button variant="secondary" onClick={divideBy2} className="flex items-center gap-2">
              <DivideSquare className="h-4 w-4" /> /2
            </Button>
            <Button variant="secondary" onClick={reset} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">About useCounter</h3>
            <p className="text-sm text-muted-foreground">
              A flexible hook for managing numeric counter state with helpful utilities.
            </p>
          </div>

          <div className="space-y-4">
            <pre className="bg-muted p-3 rounded-md text-xs">
              {`const {
  count,      // current value
  increment,  // () => void
  decrement,  // () => void
  reset,      // () => void
  setCount    // Dispatch<SetStateAction<number>>
} = useCounter(0) // initial value`}
            </pre>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Customizable initial value</li>
                  <li>Increment/decrement utilities</li>
                  <li>Reset functionality</li>
                  <li>Direct state control</li>
                </ul>
              </div>

              <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>All operations are memoized for performance</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export { UseCounterDemo };
