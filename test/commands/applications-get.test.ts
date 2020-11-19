/* WARNING: This file is automatically generated. Please edit the files in the /generation/tests directory. */
import { expect, test } from "@oclif/test"
import { cred } from "../../src/credentials"

const applicationId = "userInput-applicationId"

import { data } from "../../src/commands/data"
import { Environment } from "../../src/environment"

describe("applications:get Data Test", function () {
    const testJson = {
        message: "Response from server",
    }

    const nockServerResponse = `{
  "message": "Response from server"
}`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command(["applications:get", "userInput-applicationId"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(nockServerResponse)
        })

    const testJsonErrorNoSuggestion = {
        code: 2,
        message: "Method Not Allowed",
        url: "https://docs.freeclimb.com/reference/error-and-warning-dictionary#2",
        details: {},
    }

    const nockServerResponseErrorNoSuggestion = `starting test`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorNoSuggestion)
    )
        .stdout()
        .command(["applications:get", "userInput-applicationId"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly without a suggestion")

    const testJsonErrorWithSuggestion = {
        code: 50,
        message: "Unauthorized To Make Request",
        url: "https://docs.freeclimb.com/reference/error-and-warning-dictionary#50",
        details: {},
    }

    const nockServerResponseErrorWithSuggestion = `starting test`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorWithSuggestion)
    )
        .stdout()
        .command(["applications:get", "userInput-applicationId"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly with a suggestion")

    test.stdout()
        .command(["applications:get", "userInput-applicationId", "additionalArguments"])
        .exit(2)
        .it("Test parse error gets triggered when there is an additional argument")

    describe("applications:get next flag test", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .get(
                    `/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`,
                    {}
                )
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .env({ FREECLIMB_APPLICATIONS_GET_NEXT: undefined })
            .command(["applications:get", "userInput-applicationId"])
            .command(["applications:get", "userInput-applicationId", "--next"])
            .exit(3)
            .it("Tests return of Exit Code 3 when flag next is not available")

        const testJsonNext = {
            total: 1,
            start: 0,
            end: 0,
            page: 1,
            numPages: 1,
            pageSize: 100,
            nextPageUri: null,
        }

        const nockServerResponseNext = `== You are on the last page of output. ==`

        const testJsonNext2 = {
            total: 2,
            start: 0,
            end: 0,
            page: 1,
            numPages: 2,
            pageSize: 100,
            nextPageUri: "",
        }

        const nockServerResponseNext2 = `== Currently on page 1. Run this command again with the -n flag to go to the next page. ==`

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`)
                .query({ cursor: "6170706c69636174696f6e733a676574" })
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJsonNext)
        )
            .stdout()
            .env({ FREECLIMB_APPLICATIONS_GET_NEXT: "6170706c69636174696f6e733a676574" })
            .command(["applications:get", "userInput-applicationId", "--next"])
            .it(
                "Test flag next works as expected when available with on last page",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponseNext)
                }
            )

        const finalCursor = "freeClimbCLIAutomatedTestCursor"

        before(() => {
            ;(async () => {
                testJsonNext2.nextPageUri = `https://www.freeclimb.com/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}?cursor=${finalCursor}`
            })()
        })
        after(() => {
            const dataDir = data.run([]).then(
                (dataDir) => {
                    const environment = new Environment(dataDir)
                    environment.clearString("FREECLIMB_APPLICATIONS_GET_NEXT")
                },
                (reason) => console.log(reason)
            )
        })
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`)
                .query({ cursor: "6170706c69636174696f6e733a676574" })
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJsonNext2)
        )
            .stdout()
            .env({ FREECLIMB_APPLICATIONS_GET_NEXT: "6170706c69636174696f6e733a676574" })
            .command(["applications:get", "userInput-applicationId", "--next"])
            .it(
                "Test flag next works as expected when available with has more pages",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponseNext2)
                }
            )
    })
})

describe("applications:get Status Test", function () {
    const testJsonStatus = ""

    const statusResponse = `Received a success code from FreeClimb. There is no further output.
`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .get(`/apiserver/Accounts/${await cred.accountId}/Applications/${applicationId}`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(204, testJsonStatus)
    )
        .stdout()
        .command(["applications:get", "userInput-applicationId"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(statusResponse)
        })
})