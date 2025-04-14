
export async function load() {
    const res = await fetch('https://raw.githubusercontent.com/lukas1h/lukashahnart-media/refs/heads/main/images.json');
    const images = await res.json();
    console.log("images:", images);

    return {
        props: {
            images
        }
    };
}