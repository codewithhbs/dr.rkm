"use client";

import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINT } from "@/constant/url";
import { toast } from "sonner";
import { ServiceData } from "@/types/service";


const API_URL = API_ENDPOINT;



export const useService = () => {
    const [services, setServices] = useState<ServiceData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchServices = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/get-all-service?limit=20`);

            if (response.data.success) {
                setServices(response.data.data);
            } else {
                toast.error("Failed to fetch services");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            toast.error("Something went wrong while fetching services");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    return {
        services,
        loading,
        fetchServices,
    };
};

export const useServiceBySlug = (slug: string) => {
    const [service, setService] = useState<ServiceData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchServiceBySlug = useCallback(async () => {
        if (!slug) return;

        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/get-service-slug/${slug}`);

            if (response.data.success) {
                setService(response.data.data);
            } else {
                toast.error("Failed to fetch service by slug");
            }
        } catch (error) {
            console.error("Error fetching service by slug:", error);
            toast.error("Something went wrong while fetching the service");
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchServiceBySlug();
    }, [fetchServiceBySlug]);

    return {
        service,
        loading,
        fetchServiceBySlug,
    };
};
