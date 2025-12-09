using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TorNodeDetector
{
    /// <summary>
    /// Query options for the Tor Node Detector API
    /// </summary>
    public class TorNodeDetectorQueryOptions
    {
        /// <summary>
        /// The IP address to check against the Tor exit node list
        /// Example: 185.189.183.143
        /// </summary>
        [JsonProperty("ip")]
        public string Ip { get; set; }
    }
}
