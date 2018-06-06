var graph = Viva.Graph.graph();
graph.addLink(1, 2);

/*var renderer = Viva.Graph.View.renderer(graph, {
    container: document.getElementById('graph-container')
});
renderer.run();*/

var renderer = Viva.Graph.View.renderer(graph);
renderer.run();