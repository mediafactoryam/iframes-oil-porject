anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "kam oil",
        title: "«ԿԱՄՕՅԼ» ՍՊԸ",
        collapse: true,
        x: 100,
        y: 0,
        height: 50,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "maxoil",
        title: "«ՄԱՔՍՕՅԼ» ՍՊԸ",
        collapse: true,
        x: 400,
        y: 0,
        height: 50,
        fill: {
          src: "https://i.ibb.co/0jwgZF8/maxoil.png"
        }
      },
      {
        id: "megaoil",
        title: "«ՄԵԳԱ ՕՅԼ» ՍՊԸ",
        collapse: true,
        x: 700,
        y: 0,
        height: 50,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "kamo melkonyan",
        title: "Կամո Մելքոնյան",
        collapse: true,
        x: 100,
        y: 400,
        height: 50,
        fill: {
          src: "https://i.ibb.co/B3YpCbL/man.png"
        }
      },
      {
        id: "harut pambukyan",
        title: "Հարութ Փամբուկյան",
        collapse: true,
        x: 400,
        y: 400,
        height: 50,
        fill: {
          src: "https://i.ibb.co/vs2xT0j/image.jpg"
        }
      },
      {
        id: "Rima Baghramyan",
        title: "Ռիմա Բաղրամյան",
        collapse: true,
        x: 700,
        y: 250,
        height: 50,
        fill: {
          src: "https://i.ibb.co/5sq1MBM/woman.png"
        }
      }
    ],
    edges: [
      {
        from: "kam oil",
        to: "kamo melkonyan",
        title: "Սեփականատեր"
      },
      {
        from: "maxoil",
        to: "kamo melkonyan",
        title: "Տնօրեն"
      },

      {
        from: "maxoil",
        to: "harut pambukyan",
        title: "Սեփականատեր"
      },
      {
        from: "kamo melkonyan",
        to: "harut pambukyan",
        title: "Բիզնես գործընկեր"
      },
      {
        from: "Rima Baghramyan",
        to: "megaoil",
        title: "Բաժնետեր"
      },
      {
        from: "Rima Baghramyan",
        to: "kamo melkonyan",
        title: "Ամուսին"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  
  // set title
  chart.title("«Կամօյլ» ՍՊԸ-ի և «Մաքս օյլ» ՍՊԸ-ի կապը ");
  // access nodes
  var nodes = chart.nodes();
  chart.layout().type("fixed");
  // set the size of nodes
  nodes.normal().height(45);
  nodes.hovered().height(45);
  nodes.selected().height(45);

  // set the stroke of nodes
  nodes.normal().stroke(null);
  nodes.hovered().stroke("#333333", 3);
  nodes.selected().stroke("#333333", 3);
  // enable labels of nodes
  chart.nodes().labels().enabled(true);
  chart.edges().labels().enabled(true);

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