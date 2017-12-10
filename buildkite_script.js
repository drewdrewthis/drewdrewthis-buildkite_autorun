window.confirm = () => true;

var count = 0;

var retry = () => {

  count++;

  console.log('- - - - - - - - - - - - -');
  console.log('Checking for failed tests -', count);

  $('.build-details-pipeline-job-state-failed:not(.build-details-pipeline-job-expanded) .cursor-pointer').each((i, button) => button.click());

  console.log('Failing tests found!');
  console.log('Failing test : fail count');

  $('.build-details-pipeline-job-state-failed').each((i, job) => {
    console.count(job.id);
  });

  $('.build-details-pipeline-job-state-failed .job-rebuild-button').each((i, button) => {
    button.click();
  });

  if ($('.build-details-pipeline-job-state-failed, .build-details-pipeline-job-state-running').length == 0) {
    console.log('Congrats, yo -- All tests passed.');
    clearInterval(retries);
  }

  if (count > 10) {
    console.log('Test failed too many times. Stopping.. :(');
    clearInterval(retries);
  }
};

retry();

var retries = setInterval(retry, 150000); //Retry every 3 mins
