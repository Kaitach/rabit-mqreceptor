/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MessagingController } from "./app.controller";
import { MessagingService } from "./app.service";
import { RabbitMQModule } from "@nestjs-plus/rabbitmq";



@Module ( { 
  imports : [ 
    RabbitMQModule.forRoot( {
      
       
        exchanges: [ 
          { 

            name : 'exchangeTopic' , 
            type : 'topic' ,
           
          } , { 
              name : 'exchangeDirect' , 
              type : 'direct' 
              
            }, { 
             name : 'fanOut1' , 
             type : 'fanout' 
             
           }
        ] , 
      uri: 'amqp://127.0.0.1:5672',
       
    }),],
 
  providers: [ MessagingService ] , 
  controllers : [ MessagingController ] 
} )
export  class  RabbitExampleModule  { }