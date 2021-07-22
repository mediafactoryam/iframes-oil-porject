anychart.onDocumentReady(function () {
  let data = {
    nodes: [
      {
        id: "kam oil",
        title: "«ԿԱՄՕՅԼ» ՍՊԸ",
        x: 0,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "maxoil",
        title: "«ՄԱՔՍՕՅԼ» ՍՊԸ",
        x: 200,
        y: 100,
        height: 65,
        fill: {
          src: "https://i.ibb.co/0jwgZF8/maxoil.png"
        }
      },
      {
        id: "megaoil",
        title: "«ՄԵԳԱ ՕՅԼ» ՍՊԸ",
        x: 400,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "maxhur",
        title: "«ՄԱՔՍ ՀՈՒՐ» ՍՊԸ",
        x: 600,
        y: 100,
        height: 40,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "talin1",
        title: "«ԹԱԼԻՆ 1» ՍՊԸ",
        x: 750,
        y: 280,
        height: 40,
        fill: {
          src: "https://i.ibb.co/J3fFwjn/comp.png"
        }
      },
      {
        id: "kamo melkonyan",
        title: "Կամո Մելքոնյան",
        x: 50,
        y: 400,
        height: 70,
        fill: {
          src: "https://i.ibb.co/B3YpCbL/man.png"
        }
      },
      {
        id: "harut pambukyan",
        title: "Հարութ Փամբուկյան",
        x: 450,
        y: 500,
        height: 70,
        fill: {
          src: "https://i.ibb.co/vs2xT0j/image.jpg"
        }
      },
      {
        id: "Rima Baghramyan",
        title: "Ռիմա Բաղրամյան",
        x: 400,
        y: 250,
        height: 40,
        fill: {
          src: "https://i.ibb.co/5sq1MBM/woman.png"
        }
      },
      {
        id: "Levon Hakobyan",
        title: "Լևոն Հակոբյան",
        x: 750,
        y: 500,
        height: 40,
        fill: {
          src: "https://i.ibb.co/B3YpCbL/man.png"
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
        from: "kamo melkonyan",
        to: "talin1",
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
      },
      {
        from: "harut pambukyan",
        to: "maxhur",
        title: "Սեփականատեր"
      },
      {
        from: "Levon Hakobyan",
        to: "maxhur",
        title: "Տնօրեն"
      },
      {
        from: "Levon Hakobyan",
        to: "talin1",
        title: "Բաժնետեր"
      }
    ]
  };

  // create chart from loaded data
  var chart = anychart.graph(data);
  // set title
  chart.title(
    "«Կամօյլ» և «Մաքս օյլ» ՍՊԸ-ները կապված են ԱԺ նախկին պատգամավոր Հարութ Փամբուկյանի հետ "
  );
  // access nodes
  var nodes = chart.nodes();
  chart.layout().type("fixed");
  // set the size of nodes
  nodes.normal().height(45);
  nodes.hovered().height(45);
  nodes.selected().height(45);

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
