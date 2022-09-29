import React from "react";
import "./QuesAns.css";

const QuesAns = () => {
  return (
    <div className="qa">
      <h2>Questions and Answers</h2>
      <div>
        <h3>Q.1) How does React work?</h3>
        <p>
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow. So, to make it faster, develpers
          implemented a virtual DOM that is basically a DOM tree representation
          in JavaScript. So when it needs to read or write to the DOM, it will
          use the virtual representation of it. Then the virtual DOM will try to
          find the most efficient way to update the browser’s DOM. So, whenever
          we write a JSX inside a component, React makes a react element and
          makes it like a tree. Whenever there is a change on the DOM, React
          uses diff algorithm to efficiently update the virtual DOM and make the
          changes in real DOM.
        </p>
      </div>
      <div>
        <h3>Q.2) Diff between Props and State?</h3>
        <p>
          1) Props are passed from one component to another, state is passed
          within the component only. <br />
          2) Props are immutable, states are mutable. <br />
          3) Props can be used with state and functional components, state can
          be used only with the state components/class component.
        </p>
      </div>
      <div>
        <h3>Q.3) What are the use-cases of useEffect besides data fetch?</h3>
        <p>
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be used inside
          useEffect.
        </p>
      </div>
    </div>
  );
};

export default QuesAns;
