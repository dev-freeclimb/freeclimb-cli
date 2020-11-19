/* WARNING: This file is automatically generated. Please edit the files in the /generation/commands directory. */
import { Command, flags } from "@oclif/command"
import { Output } from "../../output"
import { FreeClimbApi, FreeClimbResponse } from "../../freeclimb"
import * as Errors from "../../errors"

export class logsFilter extends Command {
    static description = ` Returns the first page of Logs associated with the specified account. The Performance Query Language, or PQL, is a simple query language that uses key-comparator-value triplets joined by boolean operators to build queries capable of searching through logs. PQL is inspired heavily by the syntax of SQL's WHERE clauses. The Dot Operator (.) can be used to search for nested key / value pairs. In the example above, metadata.test is used to access the value of the nested test key under metadata. PQL supports the following comparator operators: =, !=, <, <=, >, >=, as well as the use of () to indicate the order in which parts are evaluated.`

    static flags = {
        maxItem: flags.integer({
            char: "m",
            description: "Show only a certain number of the most recent logs on this page.",
        }),
        next: flags.boolean({ char: "n", description: "Displays the next page of output." }),
        help: flags.help({ char: "h" }),
    }

    static args = [
        {
            name: "pql",
            description:
                "The filter query for retrieving logs. See Performance Query Language below.",
            required: true,
        },
    ]

    async run() {
        const out = new Output(this)
        const { args, flags } = (() => {
            try {
                return this.parse(logsFilter)
            } catch (error) {
                const err = new Errors.ParseError(error)
                this.error(err.message, { exit: err.code })
            }
        })()
        const fcApi = new FreeClimbApi(`Logs`, true, this)
        const normalResponse = (response: FreeClimbResponse) => {
            if (flags.maxItem) {
                out.out(JSON.stringify(response.data.logs.splice(0, flags.maxItem), null, 2))
            } else {
                const resp =
                    response.status === 204
                        ? "Received a success code from FreeClimb. There is no further output."
                        : JSON.stringify(response.data, null, 2)
                out.out(resp)
            }
        }
        const nextResponse = (response: FreeClimbResponse) => {
            if (flags.maxItem) {
                out.out(JSON.stringify(response.data.logs.splice(0, flags.maxItem), null, 2))
            } else {
                out.out(JSON.stringify(response.data, null, 2))
            }
            if (out.next === null) {
                out.out("== You are on the last page of output. ==")
            }
        }

        if (flags.next) {
            if (out.next === undefined || out.next === "freeclimbUnnamedTest") {
                const error = new Errors.NoNextPage()
                this.error(error.message, { exit: error.code })
            } else {
                await fcApi.apiCall("GET", { params: { cursor: out.next } }, nextResponse)
            }
            return
        }
        if (args.pql.includes("'")) {
            this.warn(
                "A single quote has been detected in your pql. Keep in mind that all strings must be encapsulated by double quotes for the pql to be valid. If this was a mistake, please rerun the command with your rewritten pql. The command will now run."
            )
        }

        await fcApi.apiCall(
            "POST",
            {
                data: {
                    pql: args.pql,
                },
            },
            normalResponse
        )
    }
}