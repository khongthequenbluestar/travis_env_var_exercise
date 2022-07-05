
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
	const username = process.env.DOCKER_USERNAME;
	console.log('My username is %s', username);
	console.log(`My username = ${username}`);
    await sleep(5000);
  }
}

main();
