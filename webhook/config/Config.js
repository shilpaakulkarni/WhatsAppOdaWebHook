// ODA Details
module.exports.ODA_WEBHOOK_URL = 'https://8716c685.ngrok.io/connectors/v1/tenants/chatbot-tenant/listeners/webhook/channels/530cbecc-5f12-4f54-88d9-501be2f3f371' || 'ODA_WEBHOOK_URL';
module.exports.ODA_WEBHOOK_SECRET = 'GJoTE3Tg6rrJLJKwFNaxmPVtnthoB9Tp' || 'ODA_WEBHOOK_SECRET';

// Smooch Details
exports.SMOOCH_APP_ID = '5cb1a95c859d320010eef2be' || 'SMOOCH_APP_ID';
exports.SMOOCH_KEY_ID = 'app_5cb1b483b48bfa00101c28dd' || 'SMOOCH_KEY_ID';
exports.SMOOCH_SECRET = 'zy-CZLXt0gPvjIUmke4sQTndZFkArI0FymhOTLAQMCMNa_6BQ0BCVq0-OjCWIQpRO4QuZM5Ouw6WZtf2o_CAYw' || 'SMOOCH_SECRET';
exports.SMOOCH_WEBHOOK_SECRET = 'FXhBkdjoRMh4jOnkzK0TjyUHVivLm1NghiolU3yk21anJfFFAisy68eoBRuhDqR7UuCpTSbaL7prWSH3E5oktg' || 'SMOOCH_WEBHOOK_SECRET';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";