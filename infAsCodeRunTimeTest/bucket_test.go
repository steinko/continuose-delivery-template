package greeting

import (
    "os"
    "path"
    "testing"

    "github.com/pulumi/pulumi/pkg/v2/testing/integration"
)

func TestExamples(t *testing.T) {
    
    awsRegion := "eu-north-1"
    cwd, _ := os.Getwd()
    integration.ProgramTest(t, &integration.ProgramTestOptions{
        Quick:       true,
        SkipRefresh: true,
        Dir:         path.Join(cwd,"..","deploymentaws"),
        Config: map[string]string{
            "aws:region": awsRegion,
        },
        ExtraRuntimeValidation: func(t *testing.T, stack integration.RuntimeValidationStackInfo) {
        url := "http://" + stack.Outputs["websiteUrl"].(string)
        resp, err := http.Get(url)
        if !assert.NoError(t, err) {
            return
        }
        if !assert.Equal(t, 200, resp.StatusCode) {
            return
        }
        defer resp.Body.Close()
        body, err := ioutil.ReadAll(resp.Body)
        if !assert.NoError(t, err) {
            return
        }
        assert.Contains(t, string(body), "Hello, Pulumi!")
    },
    })
}