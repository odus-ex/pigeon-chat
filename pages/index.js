import { useEffect } from "react";
import { fromEvent, scan } from "rxjs";

export default function Home() {
  useEffect(() => {
    fromEvent(window.document, "click")
      .pipe(scan((clickCount) => clickCount + 1, 0))
      .subscribe((clickCount) => console.log(`Click count ${clickCount}`));
  }, []);

  return <h1> This is home</h1>;
}
