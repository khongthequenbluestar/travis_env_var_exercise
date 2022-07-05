
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
	const username = process.env.DOCKER_USERNAME;
	console.log(username);
	console.log('My username is %s', username);
    await sleep(5000);
  }
}

main();
