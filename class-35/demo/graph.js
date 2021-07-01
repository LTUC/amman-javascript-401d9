class Vertext {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertext, weight) {
        this.vertext = vertext;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDiretedEge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex)
            || !this.adjacencyList.has(endVertex)) {
            console.log('Not Found');
            return;
        }

        const list = this.adjacencyList.get(startVertex);
        list.push(new Edge(endVertex, weight));
    }

    printAll(){
        console.log(graph);
        for (const [vertex, edge] of this.adjacencyList.entries()) {
            console.log(vertex);
            console.log(edge);
        }
    }

}

const graph = new Graph();//this facebook platform

const one = new Vertext(1);// filling up the form for signup to facebook
// one --5--> two

const two = new Vertext(2);
const three = new Vertext(3);
const six = new Vertext(6);
const seven = new Vertext(7);
const eight = new Vertext(8);

graph.addVertex(one);// I signed up to facebook, so i'm part of the graph
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);

graph.addDiretedEge(one, two);// now I have two as a friend on facebook
// one , two
// one --0--> two

graph.addDiretedEge(one, three);
// one --0--> three

// one, [two, three]
graph.addDiretedEge(one, six);
graph.addDiretedEge(one, seven);
graph.addDiretedEge(one, eight, 8);


graph.addDiretedEge(six, seven);
graph.addDiretedEge(seven, eight);
graph.addDiretedEge(eight, three);
graph.addDiretedEge(three, two);


graph.printAll();