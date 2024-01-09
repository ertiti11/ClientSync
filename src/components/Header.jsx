import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { createApi } from "unsplash-js";
// import data from "./data.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const data = {
  type: "success",
  status: 200,
  response: {
    results: [
      {
        id: "Nowd8MgUK8A",
        slug: "a-group-of-people-sitting-on-top-of-a-sandy-beach-Nowd8MgUK8A",
        created_at: "2023-04-28T12:46:16Z",
        updated_at: "2024-01-07T15:46:47Z",
        promoted_at: "2023-06-02T12:16:01Z",
        width: 9504,
        height: 6336,
        color: "#262626",
        blur_hash: "LUB:vxNGRjt7_NWCWBofpJxakCR*",
        description:
          "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM",
        alt_description: "a group of people sitting on top of a sandy beach",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682685797507-d44d838b0ac7",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-group-of-people-sitting-on-top-of-a-sandy-beach-Nowd8MgUK8A",
          html: "https://unsplash.com/photos/a-group-of-people-sitting-on-top-of-a-sandy-beach-Nowd8MgUK8A",
          download:
            "https://unsplash.com/photos/Nowd8MgUK8A/download?ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/Nowd8MgUK8A/download?ixid=M3w1NDk4ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 275,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: {
          impression_urls: [
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515708&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515911&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
          ],
          tagline: "Made to Change",
          tagline_url:
            "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
          sponsor: {
            id: "mYizSrdJkkU",
            updated_at: "2024-01-07T15:00:56Z",
            username: "neom",
            name: "NEOM",
            first_name: "NEOM",
            last_name: null,
            twitter_username: "neom",
            portfolio_url: "http://www.neom.com",
            bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
            location: "NEOM, Saudi Arabia",
            links: {
              self: "https://api.unsplash.com/users/neom",
              html: "https://unsplash.com/@neom",
              photos: "https://api.unsplash.com/users/neom/photos",
              likes: "https://api.unsplash.com/users/neom/likes",
              portfolio: "https://api.unsplash.com/users/neom/portfolio",
              following: "https://api.unsplash.com/users/neom/following",
              followers: "https://api.unsplash.com/users/neom/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              medium:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              large:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
            },
            instagram_username: "discoverneom",
            total_collections: 7,
            total_likes: 1,
            total_photos: 202,
            total_promoted_photos: 72,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: "discoverneom",
              portfolio_url: "http://www.neom.com",
              twitter_username: "neom",
              paypal_email: null,
            },
          },
        },
        topic_submissions: {},
        user: {
          id: "mYizSrdJkkU",
          updated_at: "2024-01-07T15:00:56Z",
          username: "neom",
          name: "NEOM",
          first_name: "NEOM",
          last_name: null,
          twitter_username: "neom",
          portfolio_url: "http://www.neom.com",
          bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
          location: "NEOM, Saudi Arabia",
          links: {
            self: "https://api.unsplash.com/users/neom",
            html: "https://unsplash.com/@neom",
            photos: "https://api.unsplash.com/users/neom/photos",
            likes: "https://api.unsplash.com/users/neom/likes",
            portfolio: "https://api.unsplash.com/users/neom/portfolio",
            following: "https://api.unsplash.com/users/neom/following",
            followers: "https://api.unsplash.com/users/neom/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "discoverneom",
          total_collections: 7,
          total_likes: 1,
          total_photos: 202,
          total_promoted_photos: 72,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "discoverneom",
            portfolio_url: "http://www.neom.com",
            twitter_username: "neom",
            paypal_email: null,
          },
        },
      },
      {
        id: "WNeI-A90sMM",
        slug: "fireworks-are-lit-up-the-night-sky-above-a-city-WNeI-A90sMM",
        created_at: "2024-01-02T04:06:36Z",
        updated_at: "2024-01-07T09:34:12Z",
        promoted_at: "2024-01-07T09:34:12Z",
        width: 3699,
        height: 5549,
        color: "#262626",
        blur_hash: "LB7-H8Rj0KxaxuWCNGof0Lof?HRj",
        description: null,
        alt_description: "fireworks are lit up the night sky above a city",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1704168370831-b7f450dadeb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704168370831-b7f450dadeb0",
        },
        links: {
          self: "https://api.unsplash.com/photos/fireworks-are-lit-up-the-night-sky-above-a-city-WNeI-A90sMM",
          html: "https://unsplash.com/photos/fireworks-are-lit-up-the-night-sky-above-a-city-WNeI-A90sMM",
          download:
            "https://unsplash.com/photos/WNeI-A90sMM/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/WNeI-A90sMM/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 58,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {},
        user: {
          id: "XrcGGErBEAE",
          updated_at: "2024-01-07T16:41:00Z",
          username: "harrisonchang1102",
          name: "Harrison Chang",
          first_name: "Harrison",
          last_name: "Chang",
          twitter_username: null,
          portfolio_url: null,
          bio: null,
          location: "Taiwan",
          links: {
            self: "https://api.unsplash.com/users/harrisonchang1102",
            html: "https://unsplash.com/@harrisonchang1102",
            photos: "https://api.unsplash.com/users/harrisonchang1102/photos",
            likes: "https://api.unsplash.com/users/harrisonchang1102/likes",
            portfolio:
              "https://api.unsplash.com/users/harrisonchang1102/portfolio",
            following:
              "https://api.unsplash.com/users/harrisonchang1102/following",
            followers:
              "https://api.unsplash.com/users/harrisonchang1102/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1643263561646-1ca109d35458image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1643263561646-1ca109d35458image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1643263561646-1ca109d35458image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "HARRISON_CCC",
          total_collections: 1,
          total_likes: 91,
          total_photos: 318,
          total_promoted_photos: 15,
          accepted_tos: true,
          for_hire: true,
          social: {
            instagram_username: "HARRISON_CCC",
            portfolio_url: null,
            twitter_username: null,
            paypal_email: null,
          },
        },
      },
      {
        id: "sQaXF0IynHc",
        slug: "a-woman-in-a-white-dress-posing-for-a-picture-sQaXF0IynHc",
        created_at: "2024-01-01T19:39:24Z",
        updated_at: "2024-01-07T21:49:10Z",
        promoted_at: "2024-01-07T09:34:08Z",
        width: 2400,
        height: 3000,
        color: "#737373",
        blur_hash: "LHE3I_btIVWA4T?bflWAS5WBWAWV",
        description: null,
        alt_description: "a woman in a white dress posing for a picture",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1704137893017-fd2bdf71500f?ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1704137893017-fd2bdf71500f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1704137893017-fd2bdf71500f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1704137893017-fd2bdf71500f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1704137893017-fd2bdf71500f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704137893017-fd2bdf71500f",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-woman-in-a-white-dress-posing-for-a-picture-sQaXF0IynHc",
          html: "https://unsplash.com/photos/a-woman-in-a-white-dress-posing-for-a-picture-sQaXF0IynHc",
          download:
            "https://unsplash.com/photos/sQaXF0IynHc/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/sQaXF0IynHc/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 18,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {},
        user: {
          id: "qvghZd64Lhw",
          updated_at: "2024-01-07T22:46:10Z",
          username: "hfestudio",
          name: "Sheldon",
          first_name: "Sheldon",
          last_name: null,
          twitter_username: null,
          portfolio_url: "http://www.hfe.studio",
          bio: "My photography style is characterized by a blend of candid and documentary elements, aiming to capture authentic moments and emotions.",
          location: "Surrey, Canada",
          links: {
            self: "https://api.unsplash.com/users/hfestudio",
            html: "https://unsplash.com/@hfestudio",
            photos: "https://api.unsplash.com/users/hfestudio/photos",
            likes: "https://api.unsplash.com/users/hfestudio/likes",
            portfolio: "https://api.unsplash.com/users/hfestudio/portfolio",
            following: "https://api.unsplash.com/users/hfestudio/following",
            followers: "https://api.unsplash.com/users/hfestudio/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1703884814911-c6e38273c356image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1703884814911-c6e38273c356image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1703884814911-c6e38273c356image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "hfe.studio",
          total_collections: 0,
          total_likes: 0,
          total_photos: 1028,
          total_promoted_photos: 229,
          accepted_tos: true,
          for_hire: true,
          social: {
            instagram_username: "hfe.studio",
            portfolio_url: "http://www.hfe.studio",
            twitter_username: null,
            paypal_email: null,
          },
        },
      },
      {
        id: "KfDbyu55qyY",
        slug: "a-car-driving-down-a-road-next-to-the-ocean-KfDbyu55qyY",
        created_at: "2024-01-07T00:31:44Z",
        updated_at: "2024-01-07T22:51:19Z",
        promoted_at: "2024-01-07T09:34:04Z",
        width: 7708,
        height: 11562,
        color: "#595959",
        blur_hash: "L98E3s9ZofV@~qE1t7ayNGxaRjkC",
        description: null,
        alt_description: "a car driving down a road next to the ocean",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1704587422648-43f456047a72?ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1704587422648-43f456047a72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1704587422648-43f456047a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1704587422648-43f456047a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1704587422648-43f456047a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704587422648-43f456047a72",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-car-driving-down-a-road-next-to-the-ocean-KfDbyu55qyY",
          html: "https://unsplash.com/photos/a-car-driving-down-a-road-next-to-the-ocean-KfDbyu55qyY",
          download:
            "https://unsplash.com/photos/KfDbyu55qyY/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/KfDbyu55qyY/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 74,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {},
        user: {
          id: "NHGv49zP3WQ",
          updated_at: "2024-01-07T22:08:30Z",
          username: "kalaniparker",
          name: "Kellen Riggin",
          first_name: "Kellen",
          last_name: "Riggin",
          twitter_username: "Kalaniparkr ",
          portfolio_url: null,
          bio: "Chasing my dream one picture at a time. Based in San Francisco, CA. ",
          location: "California",
          links: {
            self: "https://api.unsplash.com/users/kalaniparker",
            html: "https://unsplash.com/@kalaniparker",
            photos: "https://api.unsplash.com/users/kalaniparker/photos",
            likes: "https://api.unsplash.com/users/kalaniparker/likes",
            portfolio: "https://api.unsplash.com/users/kalaniparker/portfolio",
            following: "https://api.unsplash.com/users/kalaniparker/following",
            followers: "https://api.unsplash.com/users/kalaniparker/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1691271240133-c35dedc033cfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1691271240133-c35dedc033cfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1691271240133-c35dedc033cfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "kalaniparker",
          total_collections: 0,
          total_likes: 358,
          total_photos: 856,
          total_promoted_photos: 320,
          accepted_tos: true,
          for_hire: true,
          social: {
            instagram_username: "kalaniparker",
            portfolio_url: null,
            twitter_username: "Kalaniparkr ",
            paypal_email: null,
          },
        },
      },
      {
        id: "0Iuutf928Rk",
        slug: "a-stylized-image-of-a-person-holding-a-tennis-racquet-0Iuutf928Rk",
        created_at: "2021-11-02T02:16:29Z",
        updated_at: "2024-01-07T09:50:34Z",
        promoted_at: "2024-01-07T09:23:41Z",
        width: 4096,
        height: 3112,
        color: "#262626",
        blur_hash: "L67m]6WY0MxZxYfjR+ayE1WXt8ob",
        description: "Martha",
        alt_description:
          "a stylized image of a person holding a tennis racquet",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1635819335758-304866e30d39?ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1635819335758-304866e30d39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1635819335758-304866e30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1635819335758-304866e30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1635819335758-304866e30d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1635819335758-304866e30d39",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-stylized-image-of-a-person-holding-a-tennis-racquet-0Iuutf928Rk",
          html: "https://unsplash.com/photos/a-stylized-image-of-a-person-holding-a-tennis-racquet-0Iuutf928Rk",
          download:
            "https://unsplash.com/photos/0Iuutf928Rk/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/0Iuutf928Rk/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 81,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {
          "3d-renders": {
            status: "approved",
            approved_on: "2023-12-16T12:54:06Z",
          },
        },
        user: {
          id: "BgSvvvwH7dk",
          updated_at: "2024-01-07T14:34:32Z",
          username: "nuvaproductions",
          name: "Javier Miranda",
          first_name: "Javier",
          last_name: "Miranda",
          twitter_username: "nuvalive",
          portfolio_url: "https://nuvaproductions.com/",
          bio: "I am a graphic designer working & creating in Los Angeles, CA",
          location: "Los Angeles CA ",
          links: {
            self: "https://api.unsplash.com/users/nuvaproductions",
            html: "https://unsplash.com/@nuvaproductions",
            photos: "https://api.unsplash.com/users/nuvaproductions/photos",
            likes: "https://api.unsplash.com/users/nuvaproductions/likes",
            portfolio:
              "https://api.unsplash.com/users/nuvaproductions/portfolio",
            following:
              "https://api.unsplash.com/users/nuvaproductions/following",
            followers:
              "https://api.unsplash.com/users/nuvaproductions/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1605231947175-278944c29d78image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1605231947175-278944c29d78image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1605231947175-278944c29d78image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "nuvaproductions",
          total_collections: 0,
          total_likes: 0,
          total_photos: 72,
          total_promoted_photos: 37,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "nuvaproductions",
            portfolio_url: "https://nuvaproductions.com/",
            twitter_username: "nuvalive",
            paypal_email: null,
          },
        },
      },
      {
        id: "JZerhwPHiBI",
        slug: "a-cow-standing-in-the-middle-of-a-desert-JZerhwPHiBI",
        created_at: "2023-04-28T13:09:43Z",
        updated_at: "2024-01-07T15:46:47Z",
        promoted_at: "2023-06-15T11:08:01Z",
        width: 5664,
        height: 8497,
        color: "#592626",
        blur_hash: "LmIqcYXTDixuT1XTi_Rj~qtSM{oe",
        description:
          "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
        alt_description: "a cow standing in the middle of a desert",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687221248-3116ba6ab483",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-cow-standing-in-the-middle-of-a-desert-JZerhwPHiBI",
          html: "https://unsplash.com/photos/a-cow-standing-in-the-middle-of-a-desert-JZerhwPHiBI",
          download:
            "https://unsplash.com/photos/JZerhwPHiBI/download?ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/JZerhwPHiBI/download?ixid=M3w1NDk4ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 310,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: {
          impression_urls: [
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515644&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
            "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515847&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
          ],
          tagline: "Made to Change",
          tagline_url:
            "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
          sponsor: {
            id: "mYizSrdJkkU",
            updated_at: "2024-01-07T15:00:56Z",
            username: "neom",
            name: "NEOM",
            first_name: "NEOM",
            last_name: null,
            twitter_username: "neom",
            portfolio_url: "http://www.neom.com",
            bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
            location: "NEOM, Saudi Arabia",
            links: {
              self: "https://api.unsplash.com/users/neom",
              html: "https://unsplash.com/@neom",
              photos: "https://api.unsplash.com/users/neom/photos",
              likes: "https://api.unsplash.com/users/neom/likes",
              portfolio: "https://api.unsplash.com/users/neom/portfolio",
              following: "https://api.unsplash.com/users/neom/following",
              followers: "https://api.unsplash.com/users/neom/followers",
            },
            profile_image: {
              small:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              medium:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              large:
                "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
            },
            instagram_username: "discoverneom",
            total_collections: 7,
            total_likes: 1,
            total_photos: 202,
            total_promoted_photos: 72,
            accepted_tos: true,
            for_hire: false,
            social: {
              instagram_username: "discoverneom",
              portfolio_url: "http://www.neom.com",
              twitter_username: "neom",
              paypal_email: null,
            },
          },
        },
        topic_submissions: {},
        user: {
          id: "mYizSrdJkkU",
          updated_at: "2024-01-07T15:00:56Z",
          username: "neom",
          name: "NEOM",
          first_name: "NEOM",
          last_name: null,
          twitter_username: "neom",
          portfolio_url: "http://www.neom.com",
          bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
          location: "NEOM, Saudi Arabia",
          links: {
            self: "https://api.unsplash.com/users/neom",
            html: "https://unsplash.com/@neom",
            photos: "https://api.unsplash.com/users/neom/photos",
            likes: "https://api.unsplash.com/users/neom/likes",
            portfolio: "https://api.unsplash.com/users/neom/portfolio",
            following: "https://api.unsplash.com/users/neom/following",
            followers: "https://api.unsplash.com/users/neom/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "discoverneom",
          total_collections: 7,
          total_likes: 1,
          total_photos: 202,
          total_promoted_photos: 72,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "discoverneom",
            portfolio_url: "http://www.neom.com",
            twitter_username: "neom",
            paypal_email: null,
          },
        },
      },
      {
        id: "V3OGac9wpLI",
        slug: "a-car-driving-down-a-winding-road-in-the-mountains-V3OGac9wpLI",
        created_at: "2021-10-21T19:50:44Z",
        updated_at: "2024-01-07T10:49:54Z",
        promoted_at: "2024-01-07T09:23:35Z",
        width: 2320,
        height: 3480,
        color: "#262626",
        blur_hash: "L15X.H?bIpRO9H9Foz%M4oogROIU",
        description: null,
        alt_description: "a car driving down a winding road in the mountains",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1634840884193-2f6cf2538871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1634840884193-2f6cf2538871",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-car-driving-down-a-winding-road-in-the-mountains-V3OGac9wpLI",
          html: "https://unsplash.com/photos/a-car-driving-down-a-winding-road-in-the-mountains-V3OGac9wpLI",
          download:
            "https://unsplash.com/photos/V3OGac9wpLI/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/V3OGac9wpLI/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 152,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {
          minimalism: {
            status: "approved",
            approved_on: "2024-01-05T14:11:10Z",
          },
          monochromatic: {
            status: "rejected",
          },
          nature: {
            status: "rejected",
          },
        },
        user: {
          id: "b4m_kIIXHI0",
          updated_at: "2024-01-07T20:51:07Z",
          username: "miteneva",
          name: "Maria Teneva",
          first_name: "Maria",
          last_name: "Teneva",
          twitter_username: null,
          portfolio_url: null,
          bio: null,
          location: null,
          links: {
            self: "https://api.unsplash.com/users/miteneva",
            html: "https://unsplash.com/@miteneva",
            photos: "https://api.unsplash.com/users/miteneva/photos",
            likes: "https://api.unsplash.com/users/miteneva/likes",
            portfolio: "https://api.unsplash.com/users/miteneva/portfolio",
            following: "https://api.unsplash.com/users/miteneva/following",
            followers: "https://api.unsplash.com/users/miteneva/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-fb-1540063787-b5d9329fee86.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-fb-1540063787-b5d9329fee86.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-fb-1540063787-b5d9329fee86.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "mmmteneva",
          total_collections: 0,
          total_likes: 666,
          total_photos: 234,
          total_promoted_photos: 39,
          accepted_tos: true,
          for_hire: true,
          social: {
            instagram_username: "mmmteneva",
            portfolio_url: null,
            twitter_username: null,
            paypal_email: null,
          },
        },
      },
      {
        id: "SWt3Kw2gFAg",
        slug: "an-aerial-view-of-a-body-of-water-covered-in-snow-SWt3Kw2gFAg",
        created_at: "2024-01-07T00:31:04Z",
        updated_at: "2024-01-07T22:51:19Z",
        promoted_at: "2024-01-07T09:23:27Z",
        width: 4032,
        height: 2268,
        color: "#26260c",
        blur_hash: "LDA0w9-qNHof01adt7ayt7RjWAa{",
        description: null,
        alt_description: "an aerial view of a body of water covered in snow",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1704587344247-22470040fec8?ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1704587344247-22470040fec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1704587344247-22470040fec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1704587344247-22470040fec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1704587344247-22470040fec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704587344247-22470040fec8",
        },
        links: {
          self: "https://api.unsplash.com/photos/an-aerial-view-of-a-body-of-water-covered-in-snow-SWt3Kw2gFAg",
          html: "https://unsplash.com/photos/an-aerial-view-of-a-body-of-water-covered-in-snow-SWt3Kw2gFAg",
          download:
            "https://unsplash.com/photos/SWt3Kw2gFAg/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/SWt3Kw2gFAg/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 14,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {},
        user: {
          id: "HEeG0pYc31Q",
          updated_at: "2024-01-07T10:10:50Z",
          username: "photoken123",
          name: "Iain Kennedy",
          first_name: "Iain",
          last_name: "Kennedy",
          twitter_username: null,
          portfolio_url: null,
          bio: null,
          location: "Perth.   Western Australia",
          links: {
            self: "https://api.unsplash.com/users/photoken123",
            html: "https://unsplash.com/@photoken123",
            photos: "https://api.unsplash.com/users/photoken123/photos",
            likes: "https://api.unsplash.com/users/photoken123/likes",
            portfolio: "https://api.unsplash.com/users/photoken123/portfolio",
            following: "https://api.unsplash.com/users/photoken123/following",
            followers: "https://api.unsplash.com/users/photoken123/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "photoken123",
          total_collections: 16,
          total_likes: 1,
          total_photos: 550,
          total_promoted_photos: 24,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "photoken123",
            portfolio_url: null,
            twitter_username: null,
            paypal_email: null,
          },
        },
      },
      {
        id: "dFWxgWx2XSs",
        slug: "a-tall-building-with-balconies-and-balconies-on-it-dFWxgWx2XSs",
        created_at: "2024-01-06T00:20:07Z",
        updated_at: "2024-01-07T14:00:05Z",
        promoted_at: "2024-01-07T09:21:24Z",
        width: 2832,
        height: 4256,
        color: "#f3f3f3",
        blur_hash: "LrLgRvj[X9az~qfPxuj[x^j[t7j[",
        description: null,
        alt_description: "a tall building with balconies and balconies on it",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1704500355467-88351c0797c3?ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1704500355467-88351c0797c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1704500355467-88351c0797c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1704500355467-88351c0797c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1704500355467-88351c0797c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704500355467-88351c0797c3",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-tall-building-with-balconies-and-balconies-on-it-dFWxgWx2XSs",
          html: "https://unsplash.com/photos/a-tall-building-with-balconies-and-balconies-on-it-dFWxgWx2XSs",
          download:
            "https://unsplash.com/photos/dFWxgWx2XSs/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
          download_location:
            "https://api.unsplash.com/photos/dFWxgWx2XSs/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNDY2OTM2Mnw",
        },
        likes: 28,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {
          wallpapers: {
            status: "unevaluated",
          },
          "street-photography": {
            status: "unevaluated",
          },
        },
        user: {
          id: "n2bNKm9EAXw",
          updated_at: "2024-01-07T21:01:07Z",
          username: "danielstiel",
          name: "Daniel Stiel",
          first_name: "Daniel",
          last_name: "Stiel",
          twitter_username: null,
          portfolio_url: null,
          bio: "capturing stories\r\n",
          location: "Rotterdam",
          links: {
            self: "https://api.unsplash.com/users/danielstiel",
            html: "https://unsplash.com/@danielstiel",
            photos: "https://api.unsplash.com/users/danielstiel/photos",
            likes: "https://api.unsplash.com/users/danielstiel/likes",
            portfolio: "https://api.unsplash.com/users/danielstiel/portfolio",
            following: "https://api.unsplash.com/users/danielstiel/following",
            followers: "https://api.unsplash.com/users/danielstiel/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1693899711622-b4a44d29ba26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1693899711622-b4a44d29ba26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1693899711622-b4a44d29ba26image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "danielstielphotos",
          total_collections: 5,
          total_likes: 53,
          total_photos: 99,
          total_promoted_photos: 4,
          accepted_tos: true,
          for_hire: true,
          social: {
            instagram_username: "danielstielphotos",
            portfolio_url: null,
            twitter_username: null,
            paypal_email: null,
          },
        },
      },
      {
        id: "7DtAC8ak-Qw",
        slug: "a-close-up-of-a-lions-face-with-its-eyes-closed-7DtAC8ak-Qw",
        created_at: "2023-12-29T17:51:37Z",
        updated_at: "2024-01-07T20:48:58Z",
        promoted_at: "2024-01-07T09:21:20Z",
        width: 2736,
        height: 3648,
        color: "#8c5926",
        blur_hash: "LDH10S-o9a0fVYxCxu-o9uxZIpNH",
        description: "Lion",
        alt_description: "a close up of a lion's face with it's eyes closed",
        breadcrumbs: [],
        urls: {
          raw: "https://images.unsplash.com/photo-1703868673780-f234b4af73ee?ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8&ixlib=rb-4.0.3",
          full: "https://images.unsplash.com/photo-1703868673780-f234b4af73ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8&ixlib=rb-4.0.3&q=85",
          regular:
            "https://images.unsplash.com/photo-1703868673780-f234b4af73ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8&ixlib=rb-4.0.3&q=80&w=1080",
          small:
            "https://images.unsplash.com/photo-1703868673780-f234b4af73ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8&ixlib=rb-4.0.3&q=80&w=400",
          thumb:
            "https://images.unsplash.com/photo-1703868673780-f234b4af73ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8&ixlib=rb-4.0.3&q=80&w=200",
          small_s3:
            "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1703868673780-f234b4af73ee",
        },
        links: {
          self: "https://api.unsplash.com/photos/a-close-up-of-a-lions-face-with-its-eyes-closed-7DtAC8ak-Qw",
          html: "https://unsplash.com/photos/a-close-up-of-a-lions-face-with-its-eyes-closed-7DtAC8ak-Qw",
          download:
            "https://unsplash.com/photos/7DtAC8ak-Qw/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8",
          download_location:
            "https://api.unsplash.com/photos/7DtAC8ak-Qw/download?ixid=M3w1NDk4ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDQ2NjkzNjJ8",
        },
        likes: 43,
        liked_by_user: false,
        current_user_collections: [],
        sponsorship: null,
        topic_submissions: {
          animals: {
            status: "approved",
            approved_on: "2024-01-01T19:12:30Z",
          },
        },
        user: {
          id: "3hp_idrI-o0",
          updated_at: "2024-01-07T18:36:03Z",
          username: "wwarby",
          name: "William Warby",
          first_name: "William",
          last_name: "Warby",
          twitter_username: "wwarby",
          portfolio_url: "http://wwarby.com",
          bio: null,
          location: "London, UK",
          links: {
            self: "https://api.unsplash.com/users/wwarby",
            html: "https://unsplash.com/@wwarby",
            photos: "https://api.unsplash.com/users/wwarby/photos",
            likes: "https://api.unsplash.com/users/wwarby/likes",
            portfolio: "https://api.unsplash.com/users/wwarby/portfolio",
            following: "https://api.unsplash.com/users/wwarby/following",
            followers: "https://api.unsplash.com/users/wwarby/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1549777375973-a8c4028651e2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1549777375973-a8c4028651e2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1549777375973-a8c4028651e2?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "wwarby",
          total_collections: 0,
          total_likes: 42,
          total_photos: 494,
          total_promoted_photos: 26,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "wwarby",
            portfolio_url: "http://wwarby.com",
            twitter_username: "wwarby",
            paypal_email: null,
          },
        },
      },
    ],
    total: 298969,
  },
  originalResponse: {},
};

export default function Header() {
  //   const unsplash = createApi({
  //     accessKey: import.meta.env.VITE_UNPLASH_ACCESS_KEY,
  //     // `fetch` options to be sent with every request
  //   });

  //   unsplash.photos.list().then((res) => console.log(res))

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1700495723803-f7a005efe2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA2NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDEyMDMwNTB8&ixlib=rb-4.0.3&q=80&w=1080"
  );
  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        height: "250px", // Asegúrate de que el div tiene un alto y un ancho
        backgroundSize: "cover", // Esto hará que la imagen cubra todo el div
      }}
      className="flex w-full rounded-2xl mb-4  max-h-[250px] relative"
    >
      <Popover>
        <PopoverTrigger asChild className="absolute top-36 left-[87%] ">
          <Button className="w-auto" variant="outline">
            Change image
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" w-96">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Unplash</h4>
              <p className="text-sm text-muted-foreground">
                Set image from Unplash
              </p>
            </div>
            <ScrollArea className="flex flex-wrap max-h-96">
              {data.response.results.map((item) => (
                <button
                  key={item.id}
                  className="mx-4 my-3"
                  onClick={() => setImage(item.urls.regular)}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <img
                        src={item.urls.thumb}
                        alt=""
                        className="w-32 h-32 rounded-xl"
                      />

                      <span className=" font-thin text-sm leading-none text-left mt-2">
                        by {item.user.name}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </ScrollArea>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
