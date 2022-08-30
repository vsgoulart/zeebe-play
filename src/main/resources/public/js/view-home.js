
function deployDemo() {

  sendRequest('demo/', 'POST')
      .done(function(processKey) {

        const toastId = "new-process-" + processKey;
        const content = '<a href="/view/process/' + processKey + '">Demo process</a> deployed.';
        showNotificationSuccess(toastId, content);

        const createInstanceButton = $("#demo-create-instance-button");
        createInstanceButton.attr('disabled', false);
        createInstanceButton.click(function () {
          createNewProcessInstanceWith(processKey, {
            "captain": "Han Solo",
            "ship": "Millennium Falcon",
            "cargo": [
              {
                "item": "mining tools",
                "is_legal": true,
              },
              {
                "item": "spice",
                "is_legal": false
              }
              ]
          });
        });
      })
      .fail(showFailure(
          "deployment-failed",
          "Failed to deploy demo process")
      );
}
