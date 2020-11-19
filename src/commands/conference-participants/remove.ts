/* WARNING: This file is automatically generated. Please edit the files in the /generation/commands directory. */
import { Command, flags } from "@oclif/command"
import { Output } from "../../output"
import { FreeClimbApi, FreeClimbResponse } from "../../freeclimb"
import * as Errors from "../../errors"

export class conferenceParticipantsRemove extends Command {
    static description = ` Remove the specified Participant from the Conference.`

    static flags = {
        next: flags.boolean({ hidden: true }),
        help: flags.help({ char: "h" }),
    }

    static args = [
        {
            name: "conferenceId",
            description: "ID of the conference this participant is in.",
            required: true,
        },
        {
            name: "callId",
            description: "ID of the Call associated with this participant.",
            required: true,
        },
    ]

    async run() {
        const out = new Output(this)
        const { args, flags } = (() => {
            try {
                return this.parse(conferenceParticipantsRemove)
            } catch (error) {
                const err = new Errors.ParseError(error)
                this.error(err.message, { exit: err.code })
            }
        })()
        const fcApi = new FreeClimbApi(
            `Conferences/${args.conferenceId}/Participants/${args.callId}`,
            true,
            this
        )
        const normalResponse = (response: FreeClimbResponse) => {
            const resp =
                response.status === 204
                    ? "Received a success code from FreeClimb. There is no further output."
                    : JSON.stringify(response.data, null, 2)
            out.out(resp)
        }
        if (flags.next) {
            const error = new Errors.NoNextPage()
            this.error(error.message, { exit: error.code })
        }

        await fcApi.apiCall("DELETE", {}, normalResponse)
    }
}