/* WARNING: This file is automatically generated. Please edit the files in the /generation/tests directory. */
import { expect, test } from "@oclif/test"
import { cred } from "../../src/credentials"

describe("applications:create Data Test", function () {
    const testJson = {
        message: "Response from server",
    }

    const nockServerResponse = `{
  "message": "Response from server"
}`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command(["applications:create"])
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
            .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorNoSuggestion)
    )
        .stdout()
        .command(["applications:create"])
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
            .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorWithSuggestion)
    )
        .stdout()
        .command(["applications:create"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly with a suggestion")

    test.stdout()
        .command(["applications:create", "additionalArguments"])
        .exit(2)
        .it("Test parse error gets triggered when there is an additional argument")

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                alias: "userInput-alias",
                voiceUrl: "userInput-voiceUrl",
                voiceFallbackUrl: "userInput-voiceFallbackUrl",
                callConnectUrl: "userInput-callConnectUrl",
                statusCallbackUrl: "userInput-statusCallbackUrl",
                smsUrl: "userInput-smsUrl",
                smsFallbackUrl: "userInput-smsFallbackUrl",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command([
            "applications:create",
            "--alias",
            "userInput-alias",
            "--voiceUrl",
            "userInput-voiceUrl",
            "--voiceFallbackUrl",
            "userInput-voiceFallbackUrl",
            "--callConnectUrl",
            "userInput-callConnectUrl",
            "--statusCallbackUrl",
            "userInput-statusCallbackUrl",
            "--smsUrl",
            "userInput-smsUrl",
            "--smsFallbackUrl",
            "userInput-smsFallbackUrl",
        ])
        .it(
            "testing all body parameters together and required query are sent through with request",
            async (ctx) => {
                expect(ctx.stdout).to.contain(nockServerResponse)
            }
        )

    describe("applications:create body param flags", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    alias: "userInput-alias",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--alias", "userInput-alias"])
            .it(
                "required params and a body param is sent through with request-alias",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    voiceUrl: "userInput-voiceUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--voiceUrl", "userInput-voiceUrl"])
            .it(
                "required params and a body param is sent through with request-voiceUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    voiceFallbackUrl: "userInput-voiceFallbackUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--voiceFallbackUrl", "userInput-voiceFallbackUrl"])
            .it(
                "required params and a body param is sent through with request-voiceFallbackUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    callConnectUrl: "userInput-callConnectUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--callConnectUrl", "userInput-callConnectUrl"])
            .it(
                "required params and a body param is sent through with request-callConnectUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    statusCallbackUrl: "userInput-statusCallbackUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--statusCallbackUrl", "userInput-statusCallbackUrl"])
            .it(
                "required params and a body param is sent through with request-statusCallbackUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    smsUrl: "userInput-smsUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--smsUrl", "userInput-smsUrl"])
            .it(
                "required params and a body param is sent through with request-smsUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {
                    smsFallbackUrl: "userInput-smsFallbackUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command(["applications:create", "--smsFallbackUrl", "userInput-smsFallbackUrl"])
            .it(
                "required params and a body param is sent through with request-smsFallbackUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )
    })

    describe("applications:create next flag test", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {})
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .env({ FREECLIMB_APPLICATIONS_CREATE_NEXT: undefined })
            .command(["applications:create"])
            .command(["applications:create", "--next"])
            .exit(3)
            .it("Tests return of Exit Code 3 when flag next is not available")
    })
})

describe("applications:create Status Test", function () {
    const testJsonStatus = ""

    const statusResponse = `Received a success code from FreeClimb. There is no further output.
`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Applications`, {})
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(204, testJsonStatus)
    )
        .stdout()
        .command(["applications:create"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(statusResponse)
        })
})