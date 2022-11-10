import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchItem from "./SearchItem";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("SearchItem card component renders", () => {
  act(() => {
    render(<SearchItem 
      title="New year eve time coming! Let's go Etong Pilok mine. Appreciate the fog with nice grilled pork and fantastic Milky Way"
      eid="4"
      url="https://www.wongnai.com/trips/travel-at-etong-pilok"
      description="The best time to travel Ban Etong Pilok. Hunting for winter fog sea. Visiting old mine pretty village. Eating grilled pork. Waiting for Milky Way appear and ended with visiting the waterfall"
      photos={[
          "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
          "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
          "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
          "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg"
      ]}
      tags={[
          "Attraction",
          "Village",
          "Mountain",
          "Nature",
          "Nice Shot",
          "Ban Etong Pilok",
          "Karnchana buri"
      ]}
      />, container);
  });

  expect(container.querySelector("h2").textContent).toBe("New year eve time coming! Let's go Etong Pilok mine. Appreciate the fog with nice grilled pork and fantastic Milky Way");
});