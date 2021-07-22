anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "flesh",
        title: "«Ֆլեշ» ՍՊԸ",
        x: 50,
        y: 200,
        height: 50,
        fill: {
          src: "https://i.ibb.co/XYBW73X/image.jpg"
        }
      },
      {
        id: "fleshpetrol",
        title: "«Ֆլեշ Պետրոլ» ՍՊԸ",
        x: 650,
        y: 200,
        height: 50,
        fill: {
          src: "https://i.ibb.co/XYBW73X/image.jpg"
        }
      },
      {
        id: "sanasarbeglaryan",
        title: "Սանասար Բեգլարյան",

        x: 100,
        y: 400,
        height: 50,
        fill: {
          src: "https://i.ibb.co/6b147jK/image.jpg"
        }
      },
      {
        id: "Barsegh Beglaryan",
        title: "Բարսեղ Բեգլարյան",
        x: 300,
        y: 100,
        height: 70,
        fill: {
          src: "https://i.ibb.co/6H9KktH/46-thumb.jpg"
        }
      },
      {
        id: "samvelsanamyan",
        title: "Սամվել Սանամյան",
        x: 500,
        y: 400,
        height: 50,
        fill: {
          src: "https://i.ibb.co/v4h2KqF/image.jpg"
        }
      }
    ],
    edges: [
      {
        from: "sanasarbeglaryan",
        to: "flesh",
        title: "Բաժնետեր, տնօրեն"
      },
      {
        from: "Barsegh Beglaryan",
        to: "flesh",
        title: "Բաժնետեր"
      },

      {
        from: "Barsegh Beglaryan",
        to: "fleshpetrol",
        title: "Բաժնետեր"
      },
      {
        from: "Barsegh Beglaryan",
        to: "samvelsanamyan",
        title: "Փոխկապակցված անձ"
      },
      {
        from: "samvelsanamyan",
        to: "flesh",
        title: "Նախկին բաժնետեր"
      },
      {
        from: "sanasarbeglaryan",
        to: "Barsegh Beglaryan",
        title: "Որդի"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  chart.interactivity().zoomOnMouseWheel(false);
  
  // set title
  chart.title(
    "«Ֆլեշ» և «Ֆլեշ Պետրոլ» ՍՊԸ-ները պատկանում են խոշոր գործարար Բարսեղ Բեգլարյանին, որը Սերժ Սարգսյանի մտերիմներից է"
  );
  // access nodes
  var nodes = chart.nodes();
  chart.layout().type("fixed");
  // set the size of nodes
  nodes.normal().height(45);
  nodes.hovered().height(45);
  nodes.selected().height(45);

  // set the stroke of nodes
  // set the stroke of nodes
  nodes.normal().stroke(null);
  nodes.hovered().stroke("#20afa2", 3);
  nodes.selected().stroke("#20afa2", 3);
  // enable labels of nodes
  chart.nodes().labels().enabled(true);
  chart.edges().labels().enabled(true);

  chart.edges().normal().stroke("#20afa2", 2);
  chart.edges().hovered().stroke("#20afa2", 3);
  chart.edges().selected().stroke("#20afa2", 3);


  chart.tooltip().enabled(false);

  // configure labels of nodes
  chart.nodes().labels().format("{%title}");
  chart.nodes().labels().fontSize(15);
  chart.nodes().labels().fontWeight(600);
  chart.edges().labels().format("{%title}");
  chart.edges().labels().fontSize(10);
  // draw chart
  chart.container("container").draw();
});
