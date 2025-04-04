
const handleClick = async () => {
    const data = {
      name: "Andrul",
      age: 20,
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
} 

