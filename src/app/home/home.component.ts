import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../app-services/google-analytics.service';
import { Meta } from '@angular/platform-browser';
declare var ga: any;
declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.meta.addTags([
            { name: 'description', content: 'Outbak Ventures provides business and management consultancy advice for entrepreneurs to transform their ideas into real businesses.' },
            { name: 'title', content: 'Home' },
            { name: 'author', content: 'outbakventures' },
            { name: 'keywords', content: 'Outbak Ventures, outbak ventures, outbak ventures pty ltd, management consultant, entrepreneurs, consultant' }
        ]);
    }

    ngOnInit() {
        this.googleAnalytics.emitEvent('PageView', 'Home');
        $(document).ready(function () {

            $('.arrow span').click(function () {
                var navheight = $('.navbar').height();
                var scrollTopVal = $(".summarySection").offset().top - navheight;
                $('html, body').animate({
                    scrollTop: scrollTopVal
                }, 2000);
            });

            function heightOfCards() {
                var cards = $('.cubes').find('.card');
                cards.each(function () {
                    $(this).height('auto');
                });
                var cardBody = $('.cubes').find('.card-body');
                var maxheight = 0;
                cards.each(function () {
                    var currentHeight = $(this).height();
                    // console.log(currentHeight);
                    if (currentHeight > maxheight) {
                        maxheight = currentHeight;
                    }
                });
                // console.log(maxheight);
                cards.each(function () {
                    $(this).height(maxheight);
                });
                // console.log('');
            }


            var $animation_elements = $('.animation-element');
            var $heading_elements = $('.workingProcessHeading');
            var $window = $(window);

            function check_if_in_view_heading() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);
                $.each($heading_elements, function () {
                    var $element = $(this);
                    var $animationType = $element.attr('animation-type');
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) &&
                        (element_top_position <= window_bottom_position)) {
                        // console.log('in View');
                        $element.addClass('text-animate');
                        $element.addClass($animationType);
                    } else {
                        $element.removeClass('text-animate');
                        $element.removeClass($animationType);
                    }
                });
            }
            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);
                $.each($animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) &&
                        (element_top_position <= window_bottom_position)) {
                        $element.addClass('in-view');


                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }
            $window.on('scroll resize', check_if_in_view);
            $window.on('resize', check_if_in_view);
            $window.on('scroll resize', check_if_in_view_heading);
            $window.on('resize', check_if_in_view_heading);
            $window.trigger('scroll');
            $window.on('resize', heightOfCards);
            heightOfCards();

        });
    }

    navigate(id: number) {
        switch (id) {
            case 1:
                this.router.navigate(['/services/bsns-cons']);
                break;
            case 2:
                this.router.navigate(['/services/inv-mgmt']);
                break;
            case 3:
                this.router.navigate(['/services/collab']);
                break;
            default:
                break;
        }
    }

}
