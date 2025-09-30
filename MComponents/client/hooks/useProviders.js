import { useState, useEffect } from "react";
import { databases } from "../../../lib/appwrite";
import { Query } from "react-native-appwrite";

const DATABASE_ID = "68c97c1700028d1fc92f";
const COLLECTION_ID = "books";

const useProviders = () => {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProviders = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("isActive", true),
      ]);
      setProviders(res.documents);
      setFilteredProviders(res.documents);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching providers:", err);
      setLoading(false);
    }
  };

  const filterProviders = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredProviders(providers);
      return;
    }
    
    const filtered = providers.filter(provider =>
      provider.service?.toLowerCase().includes(query.toLowerCase()) ||
      provider.companyName?.toLowerCase().includes(query.toLowerCase()) ||
      provider.details?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProviders(filtered);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const refreshProviders = () => {
    setLoading(true);
    fetchProviders();
  };

  return {
    providers,
    filteredProviders,
    loading,
    searchQuery,
    filterProviders,
    refreshProviders,
  };
};

export default useProviders;