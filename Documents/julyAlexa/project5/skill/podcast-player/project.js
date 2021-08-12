// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION    ${JOVO_WEBHOOK_URL}
// ------------------------------------------------------------------

module.exports = {
  alexaSkill: {
    nlu: 'alexa',
    manifest: {
      apis: {
        custom: {
          interfaces: [
            {
              type: 'AUDIO_PLAYER',
            },
          ],
        },
      },
    },
  },
  googleAction: {
    nlu: 'dialogflow',
  },
  endpoint: 'arn:aws:lambda:us-east-1:634351033096:function:jovo-podcast-beat-radio-wavy',
};
