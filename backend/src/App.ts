import express, { Application } from 'express'
import morgan from 'morgan'
// Routes
import { indexRoute } from './apis/index.route'
import {BorrowRoute} from "./apis/borrow/borrow.route";
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import {SignOutRoute} from "./apis/sign-out/sign-out.route";
import SignupRoute from "./apis/sign-up/signup.route";
import {ProfileRoute} from "./apis/profile/profile.route";
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
import helmet from 'helmet'
import {ImageUploaderRouter} from './apis/image-upload/image-uploader.router'
import {Toolrouter} from "./apis/tool/tool.route";
import {CategoryRouter} from "./apis/category/category.route";
import MessageRoute from "./apis/messages/message.route";


// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () : void {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () :void {
        const sessionConfig = {
            store: new MemoryStore({checkPeriod: 100800}),
            secret: 'secret',
            saveUninitialized: true,
            resave: true,
            maxAge: '3h'
        }
        // const helmet = require('helmet')
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig))
        this.app.use(helmet());

    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () :void {

        // TODO add "/apis"
        this.app.use('/apis', indexRoute)
        this.app.use('/apis/tool', Toolrouter)
        this.app.use('/apis/sign-in', SignInRouter)
        this.app.use('/apis/sign-out', SignOutRoute)
        this.app.use('/apis/sign-up', SignupRoute)
        this.app.use('/apis/profile', ProfileRoute)
        this.app.use('/apis/image-upload', ImageUploaderRouter)
        this.app.use('/apis/category', CategoryRouter)
        this.app.use('/apis/borrow', BorrowRoute)
        this.app.use('/apis/message', MessageRoute)

    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}