// Set a local variable populated by the environment variable $NAME
const name = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
	const username = process.env.DOCKER_USERNAME;
	console.log('My username is %s', username);
	console.log(`My name = ${name}`);
    await sleep(5000);
  }
}

main();
