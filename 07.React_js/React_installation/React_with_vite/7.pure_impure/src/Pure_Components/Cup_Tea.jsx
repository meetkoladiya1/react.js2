function Cup({guest}) {
    return <h2>Tea Cup forguest #{guest}</h2>;
}

export default function TeaGathering() {
    let cups = [];
    for(let i = 0; i <= 12; i++) {
        cups.push(<Cup key={i} guest={i} />)
    }
    return cups;
}