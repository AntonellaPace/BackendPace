import { app, io} from "./utils/init.js"
import { MessageModel } from "./models/message.model.js";
import { errorHandler } from "./middleware/error.js";

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter  from "./routes/views.router.js";
import userRouter from "./routes/users.router.js";

import "./utils/init.js";

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

io.on("connection", (socket) => {
    socket.on("message", async (data) => {
        if(data.message === "Bienvenido"){
            const messages = await MessageModel.find();
            io.emit("messagesLogs", messages);
        }else{
            await MessageModel.create(data);

            const messages = await MessageModel.find();
            io.emit("messagesLogs", messages);
        }
    });
});