package main

import (    
            "fmt"
            "net/http"
            "net/http/httptest"
            "io"
            "github.com/cucumber/godog" 
            . "github.com/sergiughf/godog-extensions"
            
            . "github.com/onsi/gomega"
         )
         
         
          
type apiFeature struct {
   resp *httptest.ResponseRecorder
}

func (a *apiFeature) resetResponse(*godog.Scenario) {
	a.resp = httptest.NewRecorder()
}

func (a *apiFeature) theResponsCodeShouldBe(code int) error {
    Expect(a.resp.Code).Should(Equal(code))
	return nil
}

func (a *apiFeature)isDisplayed(aBody string) error {
     body, _ := io.ReadAll(a.resp.Body)
     Expect(string(body)).Should(Equal(aBody))
	 return nil
}

func (a *apiFeature) theURLHasBeenEntered(url string) (err error) {
      defer failHandler(&err)
	  resp, err := http.Get("http://35.228.10.250/helloworld")
	  if err !=nil { }
	  defer resp.Body.Close()
	  return err
}

func InitializeScenario(ctx *godog.ScenarioContext) {
    NewGomegaFailHandler(ctx)
    api := &apiFeature{}
    ctx.BeforeScenario(api.resetResponse)
    ctx.Step(`^the URL "([^"]*)"  has been entered$`,api.theURLHasBeenEntered)
    	ctx.Step(`^"([^"]*)" is displayed$`, api.isDisplayed)
	ctx.Step(`^the respons code should be (\d+)$`, api.theResponsCodeShouldBe)
}

func failHandler(err *error) {
    if r := recover(); r != nil {
        *err = fmt.Errorf("%s", r)
    }
}



